package duydh.recyclerview_examlist;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class ExamAdapter extends RecyclerView.Adapter<ExamAdapter.ItemExamHolder>{
    Context context;
    ArrayList<Exam> listData;

    public ExamAdapter(Context _context, ArrayList<Exam> _listData) {
        this.context = _context;
        this.listData = _listData;
    }

    @NonNull
    @Override
    public ItemExamHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater cai_bom = LayoutInflater.from(context);
        View ViewItem = cai_bom.inflate(R.layout.card_item, parent, false);
        ItemExamHolder ViewHolderCreated = new ItemExamHolder(ViewItem);
        return ViewHolderCreated;
    }

    @Override
    public void onBindViewHolder(@NonNull ItemExamHolder holder, int position) {
        // Lay doi tuong
        Exam examHienThi = listData.get(position);
        // Trich thong tin
        String name = examHienThi.getName();
        String date = examHienThi.getDate();
        String description = examHienThi.getDescription();
        // Dat vao cac truong thong tin cua holder
        holder.tvName.setText(name);
        holder.tvDate.setText(date);
        holder.tvDescription.setText(description);
    }

    @Override
    public int getItemCount() {
        if (listData != null) {
            return listData.size();
        }
        return 0;
    }

    class ItemExamHolder extends RecyclerView.ViewHolder implements View.OnClickListener{
        TextView tvName, tvDate, tvDescription;
        public ItemExamHolder(@NonNull View itemView) {
            super(itemView);
            tvName = itemView.findViewById(R.id.name);
            tvDate = itemView.findViewById(R.id.date);
            tvDescription = itemView.findViewById(R.id.description);
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            int viTri = getAdapterPosition();
            Exam examDuocChon = listData.get(viTri);

            String name = examDuocChon.getName();
            String date = examDuocChon.getDate();
            String description = examDuocChon.getDescription();

            // Toast
            String chuoiThongBao = name + "\n" + date + "\n" + description;
            Toast.makeText(context, chuoiThongBao, Toast.LENGTH_SHORT).show();

        }
    }
}


