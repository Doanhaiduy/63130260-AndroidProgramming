package duy.dh.sqlite;

import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    ListView lv;
    ArrayList<Book> books;
    BookAdapter adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        lv = findViewById(R.id.lv);
        books = new ArrayList<>();

        SQLiteDatabase db = openOrCreateDatabase("DBSach.db", MODE_PRIVATE, null);
        String sqlTaoBang = "CREATE TABLE IF NOT EXISTS Books( BookID integer PRIMARY KEY , " +
                "BookName text, " +
                "Page integer, " +
                "Price Float, " +
                "Description text);";
        db.execSQL(sqlTaoBang);
        insertSampleData(db);

        retrieveData();

        BookAdapter adapter = new BookAdapter(this, books);
        lv.setAdapter(adapter);

        lv.setOnItemClickListener(new AdapterView.OnItemClickListener(){
            @Override
            public void onItemClick(AdapterView<?> parent, View view, final int position, long id) {
                DialogInterface.OnClickListener dialogClickListener = new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        switch (which) {
                            case DialogInterface.BUTTON_POSITIVE:
                                deleteBook(position);
                                break;
                            case DialogInterface.BUTTON_NEGATIVE:
                                break;
                        }
                    }
                };

                android.app.AlertDialog.Builder builder = new android.app.AlertDialog.Builder(MainActivity.this);
                builder.setMessage("Are you sure you want to delete this book?")
                        .setPositiveButton("Yes", dialogClickListener)
                        .setNegativeButton("No", dialogClickListener)
                        .show();
            }
        });
    }

    private void insertSampleData(SQLiteDatabase db) {
        db.execSQL("INSERT INTO Books VALUES(5, 'Android', 100, 20000, 'Sách học lập trình Android')");
        db.execSQL("INSERT INTO Books VALUES(6, 'iOS', 200, 30000, 'Sách học lập trình iOS')");
        db.execSQL("INSERT INTO Books VALUES(7, 'PHP', 300, 40000, 'Sách học lập trình PHP')");
    }



    private void retrieveData() {
        SQLiteDatabase db = openOrCreateDatabase("DBSach.db", MODE_PRIVATE, null);
        String sqlSelect = "SELECT * FROM Books";
        Cursor cursor = db.rawQuery(sqlSelect, null);
        while (cursor.moveToNext()) {
            int bookID = cursor.getInt(0);
            String bookName = cursor.getString(1);
            int page = cursor.getInt(2);
            float price = cursor.getFloat(3);
            String description = cursor.getString(4);
            Book book = new Book(bookID, bookName, page, price, description);
            books.add(book);
        }
        cursor.close();
    }

    private void deleteBook(int position) {
        Book book = books.get(position);
        SQLiteDatabase db = openOrCreateDatabase("DBSach.db", MODE_PRIVATE, null);
        db.delete("Books", "BookID=?", new String[]{String.valueOf(book.getBookID())});
        books.remove(position);
        adapter.notifyDataSetChanged();
    }
}
