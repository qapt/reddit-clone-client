import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Landing from './pages/Landing';
import Subreddit from './pages/Subreddit';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Router>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route path='/comments/:postId' component={Post} />
                            <Route
                                path={['/r/:subredditName/submit', '/submit']}
                                component={CreatePost}
                            />
                            <Route
                                exact
                                path='/r/:subredditName'
                                component={Subreddit}
                            />

                            <Route
                                path='/accounts/register'
                                component={Register}
                            />
                            <Route path='/accounts/login' component={Login} />
                        </Switch>
                    </Router>
                </Router>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
