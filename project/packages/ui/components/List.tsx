interface ListProps {
  name: string;
}

export const List: React.FC<ListProps> = ({ name }) => {
  return <p>{name}</p>;
};
