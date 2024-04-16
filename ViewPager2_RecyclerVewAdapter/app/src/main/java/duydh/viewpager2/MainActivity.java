package duydh.viewpager2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    LandScapeAdapter landScapeAdapter;
    ArrayList<LandScape> ViewPagerDatas;
    ViewPager2 ViewPager2Land;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ViewPagerDatas = getDataForRecyclerPager();
        ViewPager2Land = findViewById(R.id.vp2Land);
        landScapeAdapter = new LandScapeAdapter(this, ViewPagerDatas);
        ViewPager2Land.setAdapter(landScapeAdapter);
        ViewPager2Land.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
                super.onPageScrolled(position, positionOffset, positionOffsetPixels);
            }

            @Override
            public void onPageSelected(int position) {
                super.onPageSelected(position);
            }

            @Override
            public void onPageScrollStateChanged(int state) {
                super.onPageScrollStateChanged(state);
            }
        });
    }

    ArrayList<LandScape> getDataForRecyclerPager(){
        ArrayList<LandScape> listDataGen = new ArrayList<>();
        listDataGen.add(new LandScape("image1", "Cột cờ Hà Nội"));
        listDataGen.add(new LandScape("image2", "Tháp Eiffel"));
        listDataGen.add(new LandScape("image3", "Kim Tự Tháp"));
        listDataGen.add(new LandScape("image4", "Vạn Lý Trường Thành"));
        listDataGen.add(new LandScape("image5", "Tháp Nghiêng Pisa"));
        return listDataGen;
    }
}