interface Person {
  name: string;
  age: number; 
}

export default function Home() {
  const data: Person[] = [{ name: "Jonh", age: 12 }];
  return <div>{data.map((item) => item.age)}</div>;
}
