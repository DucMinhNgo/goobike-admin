export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = getQuery(event);

    // handle post data
    const body = await readBody(event);

    // return {
    //     message: `Hello ${name}! Your are ${body.age} years old`
    // }

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_q8pzjASaqHPXWW4plDTauxhVQBC1bVxxBp81xI9q')

    return data
})