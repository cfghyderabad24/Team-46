import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Community Forum</h1>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#f06292',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        borderRadius: '10px'
    },
    title: {
        margin: 0
    }
};

export default Header;
