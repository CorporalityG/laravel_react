<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->default(0);
            $table->string('client_name');
            $table->string('slug')->unique();
            $table->string('title')->nullable();
            $table->mediumText('short_description')->nullable();
            $table->string('glance_1_title')->nullable();
            $table->string('glance_1_image')->nullable();
            $table->string('glance_2_title')->nullable();
            $table->string('glance_2_image')->nullable();
            $table->string('glance_3_title')->nullable();
            $table->string('glance_3_image')->nullable();
            $table->longText('description')->nullable();
            $table->string('logo')->nullable();
            $table->string('logo_icon')->nullable();
            $table->string('image')->nullable();
            $table->string('video_thumnail')->nullable();
            $table->string('video_url_iframe')->nullable();
            $table->mediumText('quote')->nullable();
            $table->string('business_level_title')->nullable();
            $table->mediumText('business_level_description')->nullable();
            $table->enum('status', ['publish', 'draft', 'trash'])->default('publish');
            $table->string('meta_title')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
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
        Schema::dropIfExists('clients');
    }
}
