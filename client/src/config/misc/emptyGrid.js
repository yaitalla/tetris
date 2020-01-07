const grid = () => {
    const i = []
    for (let j = 0;j < 20; j++) {
        i.push([])
    }
    for (let j = 0;j < 20; j++) {
        for (let x = 0; x < 10; x++) {
            i[j].push(0)
        }
    }
    return (i)
}

export default grid;