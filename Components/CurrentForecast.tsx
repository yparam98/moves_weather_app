import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export type Props = {
    
};

const CurrentForecast: React.FC<Props> = ({

}) => {
    interface Skill {
        name: string;
    };

    const [skills, setSkills] = useState<Skill[]>([{name: ''}]);

    useEffect(() => {
        console.info("useEffect entered");
        
        axios.get(
            'https://yathavanparamesh.ca/api/expertise/getNeededSkills'
        ).then((response) => {
            setSkills(response.data);
            console.log(skills[1].name);
        }).catch((err) => {
            console.error("[Axios] " + err.message);
        });
    }, []);


    return (
        <View>
            {
                skills != [] ? (
                    skills.map((line) => {
                        return <Text>{line.name}</Text>
                    })
                ) : <Text>Waiting...</Text>
            }
        </View>
    );
};

export default CurrentForecast;