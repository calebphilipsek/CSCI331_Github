"use client"

import CountButton from "./CountButton/CountButton.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";

export default function Page() {
    return <>
        <CountButton name="+1" mult="1" style="green"/>
        <CountButton name="+2" mult="2" style="yellow"/>
        <hr />
        <a href="https://github.com/calebphilipsek/CSCI331_Github">Caleb's Github</a>
        <hr />
        <SearchBar />
    </>
}