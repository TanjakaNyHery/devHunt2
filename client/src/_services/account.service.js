import Session from 'react-session-api';

const saveUser = (id, username, nom, prenom, niveau, parcours, photo, token) => {
    Session.set('id', id);
    Session.set('username', username);
    Session.set('nom', nom);
    Session.set('prenom', prenom);
    Session.set('niveau', niveau);
    Session.set('parcours', parcours);
    Session.set('photo', photo);
    Session.set('token1', token);

    // localStorage.setItem('id', id);
    // localStorage.setItem('username', username);
}

const getUserId = () => {
    return Session.get('id');
}

const getUserEmail = () => {
    return Session.get('id');
}

const getUserNom = () => {
    return Session.get('id');
}

const getUserPrenom = () => {
    return Session.get('id');
}

const getUserNiveau = () => {
    return Session.get('id');
}

const getUserParcours = () => {
    return Session.get('id');
}

const getUserPhoto = () => {
    return Session.get('id');
}

const saveToken = (token) => {
    Session.set("token", token);
}

const getToken = () => {
    Session.get('token1');
}

const getIdUser = () => {
    return Session.get('id')

    // return localStorage.getItem('id');
}

const getUserName = () => {
    return Session.get('username')

    // localStorage.getItem('username');
}

const logout = () => {
    Session.remove('id');
    Session.remove('username');

    // localStorage.removeItem('id');
    // localStorage.removeItem('username');
}

const isLogged = () => {
    return !!Session.get('id');

    // return !!localStorage.getItem('username');
}


export const sessionService = {
    saveUser, logout, isLogged, getIdUser, getUserName, saveToken, getToken, getUserId, getUserPhoto, getUserParcours, getUserNiveau, getUserNom, getUserPrenom, getUserEmail
}