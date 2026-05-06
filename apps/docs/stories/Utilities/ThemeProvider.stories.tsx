import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme, Button, Card } from "@andromeda/ui-react";

// Helper component to consume the theme
const ThemeConsumer = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <Card className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h3 className="mb-4" style={{ margin: "0 0 1rem 0" }}>
        Theme Tester
      </h3>
      <p className="mb-4" style={{ marginBottom: "1rem" }}>
        Current theme state: <strong>{theme}</strong>
      </p>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <Button variant="primary" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme("light")}
          disabled={theme === "light"}
        >
          Set Light
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme("dark")}
          disabled={theme === "dark"}
        >
          Set Dark
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme("system")}
          disabled={theme === "system"}
        >
          Set System
        </Button>
      </div>
    </Card>
  );
};

const meta: Meta<typeof ThemeProvider> = {
  title: "Utilities/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  ),
};

export const DefaultDark: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ThemeConsumer />
    </ThemeProvider>
  ),
};
