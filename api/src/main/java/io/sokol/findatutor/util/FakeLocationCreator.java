package io.sokol.findatutor.util;

import io.sokol.findatutor.entity.Location;
import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.repository.LocationRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FakeLocationCreator {

    public void run(LocationRepository locationRepo) {
        List<Location> locations = new ArrayList<>();
        JSONParser jsonParser = new JSONParser();

        try (FileReader reader = new FileReader("/home/mitchell/Projects/findatutor/api/src/main/resources/cities.json")) {
            JSONObject obj = (JSONObject) jsonParser.parse(reader);
            JSONArray locationsJSON = (JSONArray) obj.get("data");

            locationsJSON.stream().map(this::createLocation).forEach(location -> locations.add((Location) location));

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }

        locationRepo.saveAll(locations);
    }

    private Location createLocation(Object locationObj) {
        JSONObject locationJSON = (JSONObject) locationObj;
        return new Location(locationJSON.get("city").toString(),
                    locationJSON.get("state").toString());
    }
}
