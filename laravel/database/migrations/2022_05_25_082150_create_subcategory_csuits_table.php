<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubcategoryCsuitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcategory_csuit', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('csuit_categories')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('csuit_id')->constrained('csuits')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcategory_csuits');
    }
}
