export interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: "default" | "primary" | "secondary" | "tertiary";
}
