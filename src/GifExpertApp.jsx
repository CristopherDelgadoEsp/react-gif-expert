import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cats']);

    const onAddCategory = ( newCategory ) => {

        //validacion para que la categoria sea unica y no se repita
        if ( categories.includes(newCategory) ) return;

        setCategories([ ...categories,newCategory ]);
    }

    return (
        <>
    
        <h1>Super Buscador de Gifs</h1>

        <AddCategory 
            onNewCategory = { (event) => onAddCategory(event)}
        />

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                )) 
            }
            
        </>
    )
}