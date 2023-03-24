import { useEffect } from 'react'; 

const useTitle = (title: string) => { 
    useEffect(() => {
        document.title = `Teamate.app | ${title}`;
    }, [title])
};

export default useTitle;