import { render, destroy } from './components/hello/hello';

const options = {
    name: 'world'
};

render(options);

if (module.hot) {
    module.hot.accept();
    destroy();
    render(options);
}
