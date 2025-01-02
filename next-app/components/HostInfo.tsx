interface Person {
  name: string;
  relation: string;
  parents: { relation: string; isDeceased?: boolean; name: string }[];
}

interface HostInfoProps {
  person: Person;
}

function HostInfo({ person }: HostInfoProps) {
  return (
    <div className="flex items-center justify-center gap-1 whitespace-nowrap px-14">
      {person.parents?.map((parent, index) => (
        <span key={index}>
          {index > 0 && " · "}
          {parent.name}
        </span>
      ))}
      <p className="flex w-12 gap-1">
        <span>의</span>
        <span className="flex-1">{person.relation}</span>
      </p>
      <span className="text-[1.1rem] text-[#4f4f4f]">{person.name}</span>
    </div>
  );
}

export default HostInfo;
