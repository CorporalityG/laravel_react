<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryIndustrialArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_industrial_article', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('industrial_article_categories')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('industrial_article_id')->constrained('industrial_articles')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('category_industrial_article');
    }
}