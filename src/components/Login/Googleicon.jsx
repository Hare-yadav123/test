import { Button } from "@mui/material";

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.59 13.72 17.8 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.14-3.08-.39-4.55H24v9.02h12.94c-.56 2.98-2.25 5.5-4.77 7.18l7.73 6c4.51-4.17 7.08-10.32 7.08-17.65z"/>
    <path fill="#FBBC05" d="M10.54 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.11.78-4.54l-7.98-6.19A23.89 23.89 0 0 0 0 24c0 3.9.93 7.59 2.56 10.73l7.98-6.14z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.79l-7.73-6c-2.14 1.44-4.88 2.29-8.17 2.29-6.2 0-11.41-4.22-13.46-9.91l-7.98 6.14C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export default function GoogleButton() {
  return (
    <Button
      variant="text"                    // or "outlined"
      startIcon={<GoogleLogo />}
      sx={{
        textTransform: "none",
        fontSize: 16,
        color: "#000",
        py: 1,
        mt: 3,
        color:"rgba(0,0,0,0.7)",
        fontWeight:200,
      }}
    >
      Google
    </Button>
  );
}
