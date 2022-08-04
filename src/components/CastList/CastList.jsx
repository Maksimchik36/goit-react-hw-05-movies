import { CastListSt, ActorSt, NameSt, CharacterSt } from "./CastList.styled";

const CastList = ({ dataCast }) => {
    console.log("dataCast", dataCast);   

    return <CastListSt>
        {/* {dataCast.map(({character, original_name, profile_path}) => (<ActorSt key={original_name}>
            
            <NameSt>{original_name}</NameSt>
            <CharacterSt>Character: {character}</CharacterSt>

        </ActorSt>))} */}
    </CastListSt>
}

export default CastList;