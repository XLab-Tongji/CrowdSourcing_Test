package com.lab409.crowdingsourcing.util;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**Map转Json
 * Created by SHIKUN on 2016/9/30.
 * hook test 7
 */
@Service
public class ConvertJson {

    String json = null;
    ObjectMapper mapper = new ObjectMapper();

    public  String Map2Json(Map<String,String> mapInput) {

        try {
            json = mapper.writeValueAsString(mapInput);
        } catch (Exception e) {
            e.printStackTrace();

        }
        return json;
    }

    public String List2Json(List listInput) {

        try {
            json = mapper.writeValueAsString(listInput);
        } catch (Exception e) {
            e.printStackTrace();

        }
        return json;
    }

    public List Json2List(String json) {
        List listRes = null;
        try {
             listRes = mapper.readValue(json, new TypeReference<List>() {
            });
        } catch (Exception e) {
            e.printStackTrace();
        }

        return listRes;
    }
    public Map Json2Map(String json)
    {
        Map map = null;
        try {
            map = mapper.readValue(json, new TypeReference<Map>() {
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;

    }


}
