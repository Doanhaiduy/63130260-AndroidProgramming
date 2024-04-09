package dhduy.usingrecyclerview;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    LandScapeAdapter landScapeAdapter;
    ArrayList<LandScape> listData;
    RecyclerView recyclerViewLandscape;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 3
        listData = getDataForRecyclerView();
        // 4
        recyclerViewLandscape = findViewById(R.id.recyclerLand);
        // 5
//        RecyclerView.LayoutManager layoutLinear = new LinearLayoutManager(this);
//        recyclerViewLandscape.setLayoutManager(layoutLinear);

//        RecyclerView.LayoutManager layoutLinearHorizontal = new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false);
//        recyclerViewLandscape.setLayoutManager(layoutLinearHorizontal);

        RecyclerView.LayoutManager layoutGrid = new GridLayoutManager(this, 2);
        recyclerViewLandscape.setLayoutManager(layoutGrid);
        // 6
        landScapeAdapter = new LandScapeAdapter(this, listData);
        //7
        recyclerViewLandscape.setAdapter(landScapeAdapter);
    }

    ArrayList<LandScape> getDataForRecyclerView(){
        ArrayList<LandScape> listDataGen = new ArrayList<>();
        listDataGen.add(new LandScape("image1", "Cột cờ Hà Nội"));
        listDataGen.add(new LandScape("image2", "Tháp Eiffel"));
        listDataGen.add(new LandScape("image3", "Kim Tự Tháp"));
        listDataGen.add(new LandScape("image4", "Vạn Lý Trường Thành"));
        listDataGen.add(new LandScape("image5", "Tháp Nghiêng Pisa"));
        return listDataGen;
    }
}