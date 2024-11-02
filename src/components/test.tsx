// import { Link } from 'react-router-dom';

const characters = [
  { id: 1, name: 'Abadango Cluster Princess', species: 'Alien', starred: true },
  { id: 2, name: 'Beth Smith', species: 'Human', starred: true },
  { id: 3, name: 'Jerry Smith', species: 'Human', starred: false },
  { id: 4, name: 'Morty Smith', species: 'Human', starred: false },
  { id: 5, name: 'Rick Sanchez', species: 'Human', starred: false },
];

export const CharacterList = () => {
  return (
    <div>
      <h2 className="text-lg font-bold">Rick and Morty list</h2>
      
      <div className="my-4">
        <input type="text" placeholder="Search or filter results" className="w-full px-3 py-2 border rounded" />
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-bold">Starred Characters</h3>
        {characters.filter(char => char.starred).map(char => (
            <div>
            <span className="text-sm font-semibold">{char.name}</span>
            <span className="ml-auto text-green-500">♥</span>
            </div>
        //   <Link to={`/character/${char.id}`} key={char.id} className="flex items-center my-2 p-2 rounded bg-purple-100">
        //   </Link>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-bold">Characters</h3>
        {characters.filter(char => !char.starred).map(char => (
            <div>

            <span className="text-sm font-semibold">{char.name}</span>
            <span className="ml-auto text-gray-500">♡</span>
            </div>
         /*  <Link to={`/character/${char.id}`} key={char.id} className="flex items-center my-2 p-2 rounded hover:bg-gray-200">
          </Link> */
        ))}
      </div>
    </div>
  );
}

