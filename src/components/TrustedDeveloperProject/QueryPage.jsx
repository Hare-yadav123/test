import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const qaData = [
  {
    question: "What is the total carpet area of units in the project?",
    answer:
      "Carpet area for units typically starts from 800–850 sq.ft for 2/3 BHK configurations, depending on the layout.",
    time: "Answered 3 years ago",
  },
  {
    question: "Are there recreational facilities around the project?",
    answer:
      "Yes, most projects are located near parks, gyms, malls, and entertainment zones.",
    time: "Answered 3 years ago",
  },
  {
    question: "Is the project RERA registered?",
    answer:
      "Yes, reputed builders ensure the project is RERA registered. You can verify details on the official RERA website.",
    time: "Answered 2 years ago",
  },
  {
    question: "What are the available unit configurations?",
    answer:
      "Projects usually offer 1 BHK, 2 BHK, and 3 BHK apartments with different layout options.",
    time: "Answered 2 years ago",
  },
  {
    question: "What is the possession timeline?",
    answer:
      "Possession timelines vary but are generally between 2–4 years depending on construction stage.",
    time: "Answered 1 year ago",
  },
  {
    question: "Are there schools and hospitals nearby?",
    answer:
      "Yes, most residential projects are located close to reputed schools, hospitals, and daily conveniences.",
    time: "Answered 1 year ago",
  },
];

export default function QuestionsAnswers() {
  return (
    <Box sx={{ maxWidth: "1100px", mx: "auto", p: 3 }}>
      
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Questions and Answers
        </Typography>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderColor: "#6c5ce7",
            color: "#6c5ce7",
            borderRadius: "8px",
            px: 2,
          }}
        >
          Have Any Question? Ask Here...
        </Button>
      </Box>

      <Typography mt={1} color="text.secondary">
        Get answers to your un-answered questions.
      </Typography>

      {/* Q&A List */}
      <Box mt={3}>
        {qaData.map((item, index) => (
          <Box key={index}>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                borderBottom: "1px solid #eee",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ alignItems: "flex-start" }}
              >
                <Box>
                  {/* Tag */}
                  <Chip
                    label="For Project"
                    size="small"
                    sx={{
                      mb: 1,
                      backgroundColor: "#ede7f6",
                      color: "#6c5ce7",
                      fontWeight: 500,
                    }}
                  />

                  {/* Question */}
                  <Typography fontWeight="600">
                    Q: {item.question}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ pt: 0 }}>
                {/* Answer */}
                <Typography>
                  <strong>A:</strong> {item.answer}
                </Typography>

                {/* Time */}
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mt={1}
                >
                  {item.time}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {index !== qaData.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>

      {/* Disclaimer */}
      <Typography
        variant="caption"
        color="text.secondary"
        mt={3}
        display="block"
      >
        Disclaimer: While every effort is made to ensure accuracy, users are
        advised to verify details with the developer. The platform is not
        responsible for discrepancies.
      </Typography>
    </Box>
  );
}