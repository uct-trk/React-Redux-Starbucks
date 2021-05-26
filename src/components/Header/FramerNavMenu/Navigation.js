import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import MenuLink from "../../MenuLink/MenuLink";
import FindAStore from "../../FindAStore/FindAStore";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/userSlice";
import SignInButton from "../../Buttons/SignInButton/SignInButton";
import SignUpButton from "../../Buttons/SignUpButton/SignUpButton";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
       
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -5 },      
    }
};

const variants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        },
        display:"flex",
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        },
        transitionEnd: {
            display:"none"
        }
    }
};

export const Navigation = ({ toggle }) => {

    const [showMenuCategories, setShowMenuCategories] = React.useState(false)
    const user = useSelector(selectUser)

    return (
        <>
        {/* mobil hamburger menu için true durumunda ve false durumda gözükecek olan linkler*/}
            {showMenuCategories ? (
                <motion.ul variants={variants}>
                    <MenuLink link="Menu" goBackIcon onClick={() => {
                        setShowMenuCategories(false)
                    }} width="60%" />
                    <MenuLink link="All products" path="/menu" onClick={() => {
                        setShowMenuCategories(false)
                        // if we click link menu will collapse
                        //tıkladıktan sonra toggle sayesinde menu kapanacak 
                        toggle()
                    }} />
                    <MenuLink link="Featured" path="/menu/featured" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }} />
                     <MenuLink link="Previous Orders" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }} />
                     <MenuLink link="Favorite Products" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }} />
                </motion.ul>
            ) : (
                <motion.ul variants={variants}>
                    <MenuLink link="Menu" icon onClick={() => setShowMenuCategories(true)}/>
                    <MenuLink link="Rewards"/>
                    <MenuLink link="Gift Cards"/>
                    <motion.hr variants={variants2}/>
                    <motion.div className="navigation__buttons" variants={variants2}>
                        {/* need user here */}
                        {!user ? (
                            <>
                                <SignInButton/>
                                <SignUpButton/>
                            </>
                        ) : (
                            <LogOutButton/>
                        )}
                    </motion.div>
                    <motion.div variants={variants2}>
                        <FindAStore/>
                    </motion.div>
                </motion.ul>
            )}

        </>
    )

};

