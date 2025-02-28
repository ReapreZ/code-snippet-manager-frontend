import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Heading, List, Text, Pagination, Tag, TextInput, Select } from "grommet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function SnippetList() {
    const [snippets, setSnippets] = useState([]);
    const [page, setPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
    const navigate = useNavigate();
    const location = useLocation();

    const ITEMS_PER_PAGE = 5;

    useEffect(() => {
        fetch(`http://localhost:8080/snippets/all`)
            .then(response => response.json())
            .then(data => setSnippets(data))
            .catch(error => console.error("Error while loading the snippets:", error));
    }, []);

    useEffect(() => {
        if (location.state?.refresh) {
            setPage(0);
        }
    }, [location]);

    const availableLanguages = ["All Languages", ...new Set(snippets.map(snippet => snippet.language))];
    const filteredSnippets = snippets.filter(snippet =>
        snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedLanguage === "All Languages" || snippet.language === selectedLanguage)
    );

    const paginatedSnippets = filteredSnippets.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    return (
        <Box align="center" pad="medium">
            <Heading level={2}>Code Snippets</Heading>
            <Button 
                primary 
                label="➕ New Snippet" 
                onClick={() => navigate("/NewSnippet")} 
                margin={{ bottom: "medium" }}
            />
            <Box width="medium" margin={{ bottom: "medium" }}>
                <TextInput
                    placeholder="🔎 Search Title..."
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        setPage(0);
                    }}
                />
            </Box>
            <Box width="medium" margin={{ bottom: "medium" }}>
                <Select
                    options={availableLanguages}
                    value={selectedLanguage}
                    onChange={({ option }) => {
                        setSelectedLanguage(option);
                        setPage(0);
                    }}
                />
            </Box>
            <Box Width="1500px" pad="medium" background="light-2" round="small" elevation="small" style={{flexDirection: "column" }}>
                <List
                    data={paginatedSnippets}
                    pad="small"
                    border={false}
                    fill="horizontal"
                    children={(item) => (
                        <Box pad="small" border={{ side: "bottom", color: "light-4" }} margin={{ bottom: "small" }}>
                            <Box margin={{ bottom: "xsmall" }} style={{ minWidth: "1500px" }}>
                                <Text weight="bold" size="large">{item.title}</Text>
                                <Tag value={item.language} background="brand" size="small" round="medium" />
                                <SyntaxHighlighter language={item.language ? item.language.toLowerCase() : "plaintext"} style={darcula}>
                                {item.code}
                                </SyntaxHighlighter>
                            </Box>
                        </Box>
                    )}
                />
            </Box>
            {filteredSnippets.length > ITEMS_PER_PAGE && (
                <Pagination
                    numberItems={filteredSnippets.length}
                    step={ITEMS_PER_PAGE}
                    page={page + 1}
                    onChange={({ page }) => setPage(page - 1)}
                    margin={{ top: "medium" }}
                />
            )}
        </Box>
    );
}

export default SnippetList;
