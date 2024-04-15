package duydh.recyclerview_examlist;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    ExamAdapter examAdapter;
    ArrayList<Exam> listData;
    RecyclerView recyclerViewExam;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listData = getDataForRecyclerView();
        recyclerViewExam = findViewById(R.id.recyclerView);
        RecyclerView.LayoutManager layoutLinear = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
        recyclerViewExam.setLayoutManager(layoutLinear);

        examAdapter = new ExamAdapter(this, listData);
        recyclerViewExam.setAdapter(examAdapter);
    }

    ArrayList<Exam> getDataForRecyclerView(){
        ArrayList<Exam> list = new ArrayList<>();
        list.add(new Exam("Lap trinh Android", "20/4/2024", "Hoc lap trinh Android"));
        list.add(new Exam("Lap trinh iOS", "21/4/2024", "Hoc lap trinh iOS"));
        list.add(new Exam("Lap trinh Java", "22/4/2024", "Hoc lap trinh Java"));
        list.add(new Exam("Lap trinh ReactNative", "23/4/2024", "Hoc lap trinh ReactNative"));
        return list;
    }
}