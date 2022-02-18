import {getHeroById} from './08-imp-exp'

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const hero = getHeroById(id)

            if(hero){
                resolve(hero)
            }else {
                reject('Heroe no encontrado')
            }

        })
    })
}

getHeroByIdAsync(2)
    .then( hero => console.log(`El nombre es: ${hero.name}`))
    .catch( console.log )