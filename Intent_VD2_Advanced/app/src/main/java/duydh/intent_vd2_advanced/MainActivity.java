package duydh.intent_vd2_advanced;

import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    TextView input_name, input_age;
    Button btn_switch;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        input_name = findViewById(R.id.input_name);
        input_age = findViewById(R.id.input_age);
        btn_switch = findViewById(R.id.btn_switch);

        btn_switch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, Activity_nhap.class);
                startActivityForResult(intent, 8000);
            }
        });

        // Lấy dữ liệu từ màn hình nhập gưửi tới:
        }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data){
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == 8000){
            if(resultCode == RESULT_OK){
                String name = data.getStringExtra("name");
                String year = data.getStringExtra("year");
                input_name.setText(name);
                input_age.setText(year);
            }
            else{
                Toast.makeText(this,"Trả về thất bạị", Toast.LENGTH_SHORT).show();
            }
        }
        else{
            super.onActivityResult(requestCode, resultCode, data);
        }
    }
}