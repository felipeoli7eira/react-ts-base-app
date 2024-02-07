type ConfigurePropTypes = {
  children: React.ReactNode;
  pageName?: string;
};

const Configure: React.FC<ConfigurePropTypes> = ({
  children,
  pageName,
}: ConfigurePropTypes) => {
  document.title = pageName || "React";

  return children;
};

export default Configure;
