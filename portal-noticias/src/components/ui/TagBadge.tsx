interface Props {
  label: string;
}

const TagBadge = ({ label }: Props) => {
  return <span className="tag-card">{label}</span>;
};

export default TagBadge;