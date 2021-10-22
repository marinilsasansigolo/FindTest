import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#08B6CB', '#1C6877', '#0D6175', '#45A3BF'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
    margin-top: 22px;
`

// export const Title = styled.Text`
//     font-size: 28px;
//     color: #fff;
// `

// export const Subtitle = styled.Text`
//     font-size: 15px;
//     color: blue;
// `
