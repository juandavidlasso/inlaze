import Layout from './components/common/layout';
import RootLayout from './layout';
import { MovieProvider } from './shared/stateManagement/context/MovieContext';
import { SessionProvider } from './shared/stateManagement/context/SessionContext';
import Form from './templates/form';
import Movies from './templates/movies';

export default function Home(): JSX.Element {
    return (
        <RootLayout>
            <SessionProvider>
                <MovieProvider>
                    <Layout>
                        <>
                            <Form />
                            <Movies />
                        </>
                    </Layout>
                </MovieProvider>
            </SessionProvider>
        </RootLayout>
    );
}
