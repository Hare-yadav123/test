import React, { useState } from "react";
import {
  Box,
  Fab,
  Paper,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  CircularProgress,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () =>{
    if(open){
        setMessages([
            {
                sender:"bot",
                text:"Hello 👋 How can i help you today!"
            }
        ])
    }
    setOpen(!open)
  }

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/aibot/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: currentMessage,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.message || "No response received",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Server error. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        onClick={toggleChat}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        {open ? <CloseIcon /> : <SmartToyIcon />}
      </Fab>

      {/* Chat Window */}
      {open && (
        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 200,
            height: 300,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 2,
            }}
          >
            <Typography variant="h6">
              🤖 Jarvis Assistant
            </Typography>
          </Box>

          {/* Messages */}
          <List
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 1,
              bgcolor: "#f5f5f5",
            }}
          >
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent:
                    msg.sender === "user"
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: "80%",
                    bgcolor:
                      msg.sender === "user"
                        ? "#1976d2"
                        : "#ffffff",
                    color:
                      msg.sender === "user"
                        ? "#fff"
                        : "#000",
                  }}
                >
                  {msg.text}
                </Box>
              </ListItem>
            ))}
          </List>

          {/* Input Area */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              p: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <IconButton
              color="primary"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} />
              ) : (
                <SendIcon />
              )}
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default ChatBot;