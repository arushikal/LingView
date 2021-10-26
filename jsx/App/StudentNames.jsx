import React from "react";
import { ENGLISH, ESPANOL } from "./locale/LocaleConstants.jsx";
import { TranslatableText } from "./locale/TranslatableText.jsx";

const currentStudentNames = [
    "Corrin Anderer",
    "Adam Brandt",
    "Gonzalo González",
    "Jooyoung Lee",
    "Catherine Nellie",
    "Wyatt Woodbery",
    "Holly Zheng"
];

const formerStudentNames = [
    "Valerie Aguilar Dellisanti",
    "Justin Bai",
    "Rocket Drew",
    "Amyra Durkin",
    "Zackary Entwistle",
    "Sandy Greenberg",
    "Rachel Gutman",
    "Atabong Khumbah",
    "Bryce Massey",
    "Sabrina Morvillo",
    "Thomas Ottaway",
    "Ethan Pan",
    "Kalinda Pride",
    "Chiara Repetti-Ludlow",
    "Alexis Roman",
    "Nicholas Tomlin",
    "Jack Walker",
    "Haoru Zhang",
    "Jacob Zimmerman"
];

const studentNames = {
    [ENGLISH]: (
        <div style={{ marginBottom: "-.7em" }}>
            <h3>Current students</h3>
            {currentStudentNames.map((name, index) => (
                <p><b>{name}</b></p>
            ))}
            <br />

            <h3>Former students</h3>
            {formerStudentNames.map((name, index) => (
                <p><b>{name}</b></p>
            ))}
        </div>
    ), 
    [ESPANOL]: (
        <div style={{ marginBottom: "-.7em" }}>
            <h3>Estudiantes actuales</h3>
            {currentStudentNames.map((name, index) => (
                <p><b>{name}</b></p>
            ))}
            <br />

            <h3>Antiduos estudiantes</h3>
            {formerStudentNames.map((name, index) => (
                <p><b>{name}</b></p>
            ))}
        </div>
    )
};

export function StudentNames() {
    return <TranslatableText dictionary={studentNames} />;
}