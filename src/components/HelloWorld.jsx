import styledC from 'styled-components';

export const HelloWorld = () => {
    return (
        <SContainer>
            <SH1>Hello World!!</SH1>
        </SContainer>
    );
};

const SContainer = styledC.div`
    background-color: #cd1c1c;
    &:hover {
        background-color: #111;
    }
`;

const SH1 = styledC.h1`
    color: #fff;
    text-align: center;
`;