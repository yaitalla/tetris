const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;

const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

    module.exports = createStage;