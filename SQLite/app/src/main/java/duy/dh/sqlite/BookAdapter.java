package duy.dh.sqlite;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;

public class BookAdapter extends ArrayAdapter<Book> {
    private Context mContext;
    private ArrayList<Book> mBooks;

    public BookAdapter(Context context, ArrayList<Book> books) {
        super(context, 0, books);
        mContext = context;
        mBooks = books;
    }


    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View listItem = convertView;
        if(listItem == null) {
            listItem = LayoutInflater.from(mContext).inflate(R.layout.list_item_book, parent, false);
        }

        Book currentBook = mBooks.get(position);

        TextView bookName = listItem.findViewById(R.id.textViewBookName);
        bookName.setText(currentBook.getBookName());

        TextView bookPage = listItem.findViewById(R.id.textViewPage);
        bookPage.setText(String.valueOf(currentBook.getPage()));

        TextView bookPrice = listItem.findViewById(R.id.textViewPrice);
        bookPrice.setText(String.valueOf(currentBook.getPrice()));

        TextView bookDescription = listItem.findViewById(R.id.textViewDescription);
        bookDescription.setText(currentBook.getDescription());
        Button btnDelete = listItem.findViewById(R.id.btnDelete);
        btnDelete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mBooks.remove(position);
                notifyDataSetChanged();
            }
        });

        return listItem;
    }





}
