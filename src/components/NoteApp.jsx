import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';
import { ThemeProvider } from '../contexts/ThemeContext';

class NoteApp extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        authedUser: null,
        initializing: true,
        theme: localStorage.getItem('theme') || 'dark',
        toggleTheme: () =>{
            this.setState((prevState) => {
                const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';
                localStorage.setItem('theme', newTheme);
                return {
                    theme: newTheme
                };
            })
        }
    };
   
      this.onLoginSuccess = this.onLoginSuccess.bind(this);
      this.onLogout = this.onLogout.bind(this);
    }

    

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute('data-theme', this.state.theme)
        }
    }

   
    async onLoginSuccess({ accessToken }) {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();
   
      this.setState(() => {
        return {
          authedUser: data,
        }
      })
    }

    async componentDidMount() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
                initializing: false
            }
        })
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            }
        });

        putAccessToken('')
    }
   
    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
            return (
            <div className='app-container'>
                <header>
                    <h1>Catatan App</h1>
                </header>
                <main>
                <Routes>
                    <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
                </main>
            </div>
            )
        }

        return(
            <ThemeProvider value={this.state}>
            <div className='app-container'>
                <header>
                    <h1>Catatan App</h1>
                    <Navigation logout={this.onLogout} name={this.state.authedUser.name}/>
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/add' element={<AddPage />} />
                        <Route path='/note/:id' element={<DetailPage/>} />
                        <Route path='*' element={<NotFoundPage />} />
                        <Route path='/note/*' element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
            </ThemeProvider>
        )   
    }
}

export default NoteApp; 