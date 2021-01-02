interface CleanArgs {
  uniquename: string;
  desc?: string;
}
export const clean = ({ uniquename, desc }: CleanArgs) => {
  const title = `title__${uniquename}`;
  const myDesc = desc ? `desc__${uniquename}` : "";
  const ariaLabel = `${title} ${desc}`;
  return { myDesc, title, ariaLabel };
};
