// NewSnippet.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextInput, TextArea, Form, FormField, Heading } from "grommet";

function NewSnippet() {
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async ({ value }) => {
        const response = await fetch("http://localhost:8080/snippets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(value),
        });

        if (response.ok) {
            navigate("/SnippetList", { state: { refresh: true } });
        } else {
            alert("Fehler beim Erstellen des Snippets!");
        }
    };

    return (
        <Box align="center" pad="medium">
            <Heading level={2}>Create a new Snippet!</Heading>
            <Box width="1500px" height="500px" pad="medium" background="light-2" round="small" elevation="small">
                <Form
                    onSubmit={handleSubmit}
                    value={{ title, code, language }}
                    onChange={(nextValue) => {
                        setTitle(nextValue.title || "");
                        setCode(nextValue.code || "");
                        setLanguage(nextValue.language || "");
                    }}
                >
                    <Box pad="small" background="light-1" round="xsmall" margin={{ bottom: "small" }}>
                        <FormField name="title" label="Title" required>
                            <TextInput name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </FormField>
                    </Box>
                    <Box pad="small" background="light-1" round="xsmall" margin={{ bottom: "small" }}>
                        <FormField name="language" label="Language" required>
                            <TextInput name="language" value={language} onChange={(e) => setLanguage(e.target.value)} />
                        </FormField>
                    </Box>
                    <Box pad="small" background="light-1" round="xsmall" margin={{ bottom: "small" }} width="100%">
                        <FormField name="code" label="Code" required>
                            <TextArea 
                                name="code" 
                                value={code} 
                                onChange={(e) => setCode(e.target.value)} 
                                style={{ minHeight: "320px", width: "100%" }} 
                                resize="vertical" 
                            />
                        </FormField>
                    </Box>
                    <Box direction="row" gap="medium" margin={{ top: "medium" }} justify="center">
                        <Button type="submit" primary label="Speichern" />
                        <Button label="Zurück" onClick={() => navigate("/SnippetList")} />
                    </Box>
                </Form>
            </Box>
        </Box>
    );
}

export default NewSnippet;
