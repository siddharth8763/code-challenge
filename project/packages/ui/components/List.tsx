import './List.css';

interface ListProps {
  name: string;
}

export const List: React.FC<ListProps> = ({ name }) => {
  return <p className="list-item">{name}</p>;
};
