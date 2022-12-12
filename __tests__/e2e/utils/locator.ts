export async function eachLocator(elements, callback) {
    const elementsCount = await elements.count();
    const responses = [];

    for (var index = 0; index < elementsCount; index++) {
        responses.push(await callback(await elements.nth(index)));
    }

    return responses;
}

export const port = process.env.PORT;