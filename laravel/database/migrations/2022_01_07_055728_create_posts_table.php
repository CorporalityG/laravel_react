<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->default(0);
            $table->string('post_title');
            $table->string('post_slug')->unique();
            $table->mediumText('post_short_description')->nullable();
            $table->longText('post_description')->nullable();
            $table->string('post_image')->nullable();
            $table->enum('post_status', ['publish', 'draft', 'trash'])->default('publish');
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
        Schema::dropIfExists('posts');
    }
}
