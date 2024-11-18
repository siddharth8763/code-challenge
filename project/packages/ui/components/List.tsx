import './List.css';

interface ListProps {
  name: string;
  onRemove: (name: string) => void;
}

export const List: React.FC<ListProps> = ({ name, onRemove }) => {
  return (
    <div className="list-item">
      <p>{name}</p>
      <button onClick={() => onRemove(name)}>Remove</button>
    </div>
  );
};
