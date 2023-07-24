import axios from './axios'
import Config from 'react-native-config'

function useFetchCity(){
    const fetchDataGet =  async () => {
        try {
            const responseData = await axios.get(Config.API_GET_CITY_URL)
            //setData(responseData.data)
            //setLoading(false)
            console.log("şehir bilgileri: ",responseData.data)
        } catch (error) {
            //setLoading(false)
            //setError(error)
        }
    }
}

export default useFetchCity