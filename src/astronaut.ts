// Создайте тип Astronaut (Космонавт), у которого есть следующие поля:

// isInSpace — булево значение (находится ли в космосе)
// experienceYears — число (сколько лет опыта)
// assistantRobot — объект типа Robot
// missions — массив строк, например: ["Moon Landing", "ISS Maintenance"]
// Тип Robot должен быть объектом с ключом model (например, { model: "XR-12" }).

// Затем создайте типизированные переменные, используя эти типы.

type Robot = {
    model: string
};

type Missions = "Moon Landing" | "Mars Exploration" | "ISS Maintenance" | "Asteroid study"

type Astronaut = {
    isInSpace: boolean,
    experienceYears: number,
    assistantRobot: Robot,
    missions: Missions[];

};

const astronaut1: Astronaut = {
    isInSpace: true,
    experienceYears: 9,
    assistantRobot: {model:"XR-12"},
    missions: ["Moon Landing"]

};

const astronaut2: Astronaut = {
    isInSpace: true,
    experienceYears: 3,
    assistantRobot: {model:"TM-15"},
    missions: ["Asteroid study"]

};

const astronaut3: Astronaut = {
    isInSpace: true,
    experienceYears: 7,
    assistantRobot: {model:"PX-1"},
    missions: ["Mars Exploration"]

};
