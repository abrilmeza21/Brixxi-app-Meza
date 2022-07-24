import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f1a4b2;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Bebas Neue', cursive;
    
    p {
        &:nth-child(2) {
        color: #F00758;
        margin-right:8px;
        font-size: 3.5rem;
        text-shadow: 3px 3px 3px pink ;
        padding: 0;
    }

    &:nth-child(3) {
        font-size: 2rem;
        font-weight: 500;
        color: #ff4c0a;
        text-shadow: 1px 1px 1px #f8dde2 ;
        padding: 0;
    }
}
    svg {
        fill:#ff4c0a;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    list-style: none;

    @media screen and (max-width: 1024px) {
    background-color: #f1a4b2;
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; 
    width: 100%;
    height: 70vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;


    @media screen and (max-width: 1024px) {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1.8rem;
    color: #F00758;
    text-shadow: 2px 2px 2px #f37e34 ;
    font-family: 'Bebas Neue', cursive;
    font-size: 2.8rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;
    
    &:hover {
    color: pink;
    text-shadow: 2px 2px 2px #F00758;
    background-color: #f37e34;
    transition: 0.5s all ease;
    
        div {
            svg {
            fill: #F00758;
            
        }
    }
}

div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 2.2rem;
    }
    svg {
        display: none;
        fill: #f37e34;
        margin-right: 0.5rem;
    }
}


@media screen and (max-width: 1024px) {
    width: 100%;
    div {
        width: 30%;
        justify-content: left;
        h3{
            font-size: 2.6rem;
        }
        svg {
        display: flex;
        }
    }
}

@media screen and (max-width: 880px) {
    div {
        width:300px;
        justify-content: left;
        h3{
            font-size: 2.4rem;
        }
        svg {
        display: flex;
        }
    }
}
@media screen and (max-width: 500px) {
    div {
        width: 250px;
        justify-content: left;

        h3{
            font-size: 2rem;
        }
        
        svg {
            display: flex;
        }
    }
}
@media screen and (max-width: 260px) {
    div {
        width: 100%;
        justify-content: left;
        h3{
            font-size: 1.5rem;
        }
        svg {
        display: flex;
        }
    }
}

.Cart{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        display: flex;
        fill: #F00758;
        font-size: 2.5rem;
        &:hover {
            fill: pink;
            background-color: #f37e34;
            transition: 0.5s all ease;
            }
    }
    @media screen and (max-width: 1024px) {
    svg {
        font-size: 3.5rem;
        fill: #f37e34;
    }
}
}


`;



export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 1024px) {
        display: flex;
        align-items: center;
        cursor: pointer;
            svg {
                fill: #F00758 ;
                margin-right: 0.5rem;
                font-size: 2rem;
            }   
    }
`;