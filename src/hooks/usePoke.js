import React, { useContext } from "react";
import { PokeContext } from "../contexts/PokeContext"

export function usePoke() {

    const content = useContext(PokeContext)

    return content
}