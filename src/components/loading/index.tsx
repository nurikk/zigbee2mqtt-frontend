import { h, ComponentType, FunctionalComponent, ComponentChild } from "preact";

interface LoadingProps {
    isLoading: boolean;
}

// const WithLoading = (WrappedComponent: ComponentType<LoadingProps>): ComponentType => {
//     return class TimeProviderHOC extends Component<{}, {}> {
//         render(): ComponentChild {
//             const { isLoading } = this.props;
//             if (!isLoading) {
//                 return (<WrappedComponent {...props} />)
//             }
//             return (<p>Be Hold, fetching data may take some time :)</p>);
//         }
//     };
// };

const WithLoading = (WrappedComponent: ComponentType<LoadingProps>): (props: LoadingProps) => ComponentChild => {

    return (props: LoadingProps): ComponentChild => {
        const { isLoading } = props;
        if (!isLoading) {
            return (<WrappedComponent {...props} />)
        }
        return (<p>Be Hold, fetching data may take some time :)</p>);
    };
};



export default WithLoading;